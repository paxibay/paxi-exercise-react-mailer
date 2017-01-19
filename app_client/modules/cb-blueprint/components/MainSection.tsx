import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import { Project, Settings } from '../model';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

interface MainSectionProps {
  //todos: Todo[];
  //clearCompleted: ()=>void;
  //completeAll: ()=>void;
  //editTodo: (todo:Todo, text:string)=>void;
  //completeTodo: (todo:Todo)=>void;
  //deleteTodo: (todo: Todo) => void;

  projects: Project[];
  settings: Settings;
  addProject: (p: Project) => void;
  deleteProject: () => void;
  changeCount: (s: Settings, n: number) => void;
};
interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}><h1>vm.title</h1></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <MainContent
              projects={this.props.projects}
              settings={this.props.settings}
              addProject={this.props.addProject}
              deleteProject={this.props.deleteProject}
              changeCount={this.props.changeCount}
              />
          </Col>
          <Col xs={6} md={4}><Sidebar /></Col>
        </Row>
      </Grid>
    );
  }
}

export default MainSection;
