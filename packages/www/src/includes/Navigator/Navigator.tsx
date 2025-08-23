import { NavigatorActions } from "./NavigatorActions";
import { NavigatorCover } from "./NavigatorCover";
import { NavigatorContainer } from "./NavigatorContainer";

export default function Navigator({ navigator }: any) {

  return (
    <NavigatorContainer>
      <NavigatorActions />
      <NavigatorCover />
    </NavigatorContainer>
  );
}
