import { AppLayout } from '@/components/layout/AppLayout';
import { ChatWindow } from '@/components/chatbot/ChatWindow';
import { useChatStore } from '@/hooks/useChatStore';

const ChatPage = () => {
    const { messages, isLoading, sendMessage } = useChatStore();

    return (
        <AppLayout>
            <div className="h-full p-4 md:p-6">
                <div className="max-w-4xl mx-auto h-full">
                    <ChatWindow
                        messages={messages}
                        isLoading={isLoading}
                        onClose={() => window.history.back()}
                        onSendMessage={sendMessage}
                    />
                </div>
            </div>
        </AppLayout>
    );
};

export default ChatPage;
