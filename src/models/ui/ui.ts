import { types } from "mobx-state-tree";
import { makeViews } from "../../ui-views";

export const UiModel = types.model("UiModel").views((self) => {
  return {
    ...makeViews(self),
  };
});
