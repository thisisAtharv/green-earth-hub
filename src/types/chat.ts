export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export interface ChatState {
    messages: Message[];
    isOpen: boolean;
    isLoading: boolean;
    unreadCount: number;
}

export interface QuickAction {
    id: string;
    label: string;
    icon: string;
    prompt: string;
}
