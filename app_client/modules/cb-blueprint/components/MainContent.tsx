import * as React from 'react';
import { Button, Label, Tabs, Tab } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import { Project, Settings } from '../model';

interface MainContentProps {
  projects: Project[];
  settings: Settings;
  addProject: (p: Project) => void;
  deleteProject: () => void;
  changeCount: (s: Settings, n: number) => void;
};

interface MainContentState {
  isUpdate?: boolean;
  projectsDetails?: {};
};

class MainContent extends React.Component<MainContentProps, MainContentState> {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isUpdate: false,
      projectsDetails: () => {
        return (
          <Tab></Tab>
        )
      }
    };
  }

  componentDidMount() {
    this.setState({
      projectsDetails: this.props.projects.map((project, key) => {
        const bbbb = this.props.projects;
        return (
          <Tab eventKey={key} key={key} title={project.title}>
            {project.title}
          </Tab>
        )
      })
    });
  }

  componentDidUpdate() {
    const tabs = this.props.projects.map((project, key) => {
      return (
        <Tab eventKey={key}  key={key} title={project.title}>
          {project.title}
        </Tab>
      )
    });

    if (this.state.isUpdate) {
      this.setState({
        projectsDetails: tabs,
        isUpdate: false
      });
    }
  }

  handleSettings(e) {
    const { settings } = this.props;
    const newCount = parseInt(e.target.value.trim());

    // count doesn't change, doing nothing
    if (settings.count == newCount){
      return;
    }
    this.props.changeCount(settings, newCount);

    // decreating deleteProject action invoked
    if (settings.count > newCount) {
      this.props.deleteProject();
      return;
    }

    // increating addProject action invoked
    const newProject = {
      key: 4,
      code: "04",
      title: "project 04",
    };
    this.props.addProject(newProject);

    this.setState({
      isUpdate: true
    });
  }

  renderContent() {
    return (
      <div className="panel panel-default">
        <div className="side-panel-container">
          <span>
            <Button bsStyle="primary">
              Add
            </Button>
            <Button bsStyle="primary">
              Update
            </Button>
          </span>
          <br /><br />
          <div>
            <form>
              <FormGroup
                controlId="formBasicText"
                >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl type="number" min="1" max="9" value={this.props.settings.count}
                  onChange={this.handleSettings.bind(this)}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </form>
          </div>
          <Tabs defaultActiveKey={0} id="projects">
            {this.state.projectsDetails}
          </Tabs>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

export default MainContent;
