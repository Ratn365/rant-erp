import { TagItem, TagState } from '@/interface/layout/tagsView.interface';
import { makeAutoObservable } from 'mobx';

export default class tagsViewStore {
  //state
  tagState: TagState = {
    activeTagId: location.pathname,
    tags: [],
  };
  //const
  constructor() {
    makeAutoObservable(this);
  }

  //Actions
  setActiveTag(tagId: string) {
    this.tagState.activeTagId = tagId;
  }

  addTag(tagItem: TagItem) {
    if (!this.tagState.tags.find(tag => tag.path === tagItem.path)) {
      this.tagState.tags.push(tagItem);
    }

    this.tagState.activeTagId = tagItem.path;
  }

  removeTag(targetKey: string) {
    //  const targetKey = action.payload;
    // dashboard cloud't be closed
    const state = this.tagState;
    if (targetKey === state.tags[0].path) {
      return;
    }

    const activeTagId = state.activeTagId;
    let lastIndex = 0;

    state.tags.forEach((tag, i) => {
      if (tag.path === targetKey) {
        state.tags.splice(i, 1);
        lastIndex = i - 1;
      }
    });
    const tagList = state.tags.filter(tag => tag.path !== targetKey);

    if (tagList.length && activeTagId === targetKey) {
      if (lastIndex >= 0) {
        state.activeTagId = tagList[lastIndex].path;
      } else {
        state.activeTagId = tagList[0].path;
      }
    }
  }
  removeAllTag() {
    const state = this.tagState;
    state.activeTagId = state.tags[0].path;
    state.tags = [state.tags[0]];
  }
  removeOtherTag() {
    const state = this.tagState;
    const activeTag = state.tags.find(tag => tag.path === state.activeTagId);
    const activeIsDashboard = activeTag!.path === state.tags[0].path;

    state.tags = activeIsDashboard ? [state.tags[0]] : [state.tags[0], activeTag!];
  }
}
