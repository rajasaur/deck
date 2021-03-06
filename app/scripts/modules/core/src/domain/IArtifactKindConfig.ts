import { Component, SFC } from 'react';
import { IArtifactEditorProps } from 'core/domain';

export interface IArtifactKindConfig {
  label: string;
  type?: string;
  description: string;
  key: string;
  isDefault: boolean;
  isMatch: boolean;
  isPubliclyAccessible?: boolean;
  editCmp?: Component<IArtifactEditorProps> | SFC<IArtifactEditorProps>;
  template: string;
  controller: Function;
  controllerAs?: string;
}
