type NotificationProps = {
  message: string | null;
  status?: 'notification' | 'error';
};

export function Notification({
  message,
  status = 'notification',
}: NotificationProps) {
  if (message === null) return;

  return (
    <div
      className={
        status === 'notification' ? 'notification' : 'notification error'
      }
    >
      {message}
    </div>
  );
}
