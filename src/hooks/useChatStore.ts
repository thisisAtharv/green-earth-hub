import { useState, useEffect, useCallback } from 'react';
import { Message, ChatState } from '@/types/chat';
import { chatService } from '@/services/chatService';

export const useChatStore = () => {
    const [state, setState] = useState<ChatState>({
        messages: [],
        isOpen: false,
        isLoading: false,
        unreadCount: 0
    });

    // Removed localStorage persistence - fresh session on every page load

    const toggleChat = useCallback(() => {
        setState(prev => ({
            ...prev,
            isOpen: !prev.isOpen,
            unreadCount: !prev.isOpen ? 0 : prev.unreadCount
        }));
    }, []);

    const openChat = useCallback(() => {
        setState(prev => ({
            ...prev,
            isOpen: true,
            unreadCount: 0
        }));
    }, []);

    const closeChat = useCallback(() => {
        setState(prev => ({
            ...prev,
            isOpen: false
        }));
    }, []);

    const sendMessage = useCallback(async (content: string) => {
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content,
            timestamp: new Date()
        };

        // Add user message immediately
        setState(prev => ({
            ...prev,
            messages: [...prev.messages, userMessage],
            isLoading: true
        }));

        try {
            // Get AI response
            const response = await chatService.sendMessage(content, state.messages);

            const aiMessage: Message = {
                id: `ai-${Date.now()}`,
                role: 'assistant',
                content: response,
                timestamp: new Date()
            };

            setState(prev => ({
                ...prev,
                messages: [...prev.messages, aiMessage],
                isLoading: false,
                unreadCount: prev.isOpen ? 0 : prev.unreadCount + 1
            }));
        } catch (error) {
            console.error('Error sending message:', error);

            const errorMessage: Message = {
                id: `error-${Date.now()}`,
                role: 'assistant',
                content: '⚠️ Sorry, I encountered an error. Please try again in a moment.',
                timestamp: new Date()
            };

            setState(prev => ({
                ...prev,
                messages: [...prev.messages, errorMessage],
                isLoading: false
            }));
        }
    }, [state.messages]);

    return {
        ...state,
        toggleChat,
        openChat,
        closeChat,
        sendMessage
    };
};
