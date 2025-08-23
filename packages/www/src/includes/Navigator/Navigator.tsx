import { NavigatorActions } from "./NavigatorActions";
import { NavigatorCover } from "./NavigatorCover";
import { NavigatorContainer } from "./NavigatorContainer";


export interface Props {
  actions?: any,
  cover?: any
}

export default function Navigator({ actions, cover }: Props) {

  return (
    <NavigatorContainer>
      <NavigatorActions />
      <NavigatorCover />
    </NavigatorContainer>
  );
}
