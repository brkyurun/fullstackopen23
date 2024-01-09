type NotificationProps = {
  message: string | null;
};

export function Notification({ message }: NotificationProps) {
  if (message === null) return;

  return <div className="notification">{message}</div>;
}
