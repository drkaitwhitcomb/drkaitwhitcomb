const styles = "fixed z-50 right-6 bottom-28 group opacity-70 hover:opacity-100 transition-opacity duration-200"

export function NavigatorContainer({ children }: any) {
  return (
    <div draggable={true} className={styles}>
      {children}
    </div>
  );
}