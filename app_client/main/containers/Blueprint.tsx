import * as React from 'react';
import * as redux from 'redux'
import { connect } from 'react-redux';

import {
  MainSection,
  model,
  addProject,
  deleteProject,
  changeCount
} from '../../modules/cb-blueprint';

interface BlueprintProps {
  projects: model.Project[];
  settings: model.Settings;
  dispatch: redux.Dispatch<void>;
}

class Blueprint extends React.Component<BlueprintProps, void> {
  render() {
    const { projects, settings, dispatch } = this.props;

    return (
      <div>
        <MainSection
          projects={projects}
          settings={settings}
          addProject={(p: model.Project) => dispatch(addProject(p))}
          deleteProject={() => dispatch(deleteProject())}
          changeCount={(s: model.Settings, n: number) => dispatch(changeCount(s, n))}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.blueprint.projects,
  settings: state.blueprint.settings
});

export default connect(mapStateToProps)(Blueprint);

