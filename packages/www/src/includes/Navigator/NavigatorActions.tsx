import { NavigatorAction } from "./NavigatorAction";

export function NavigatorActions({ actions }: any) {
  if (actions) {

    return (

      <div
        className="flex-col items-center mb-4 space-y-2"
      >
        {
          actions?.map((action: any) => {
            return <NavigatorAction {...action} />
          })
        }
      </div>

    );
  }
}
