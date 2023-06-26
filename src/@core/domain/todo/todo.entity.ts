import { v4 as uuid } from 'uuid';

export type TodoProps = {
  title: string;
  active: boolean;
};

export class Todo {
  public readonly id: string;
  public props: Required<TodoProps>;
  private constructor(props: TodoProps, id?: string) {
    this.id = id || uuid();
    if (props) {
      this.props = props;
      return;
    }
    this.props = {} as TodoProps;
  }

  static create(props: TodoProps, id?: string) {
    return new Todo(props, id);
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get active() {
    return this.props.active;
  }

  private set active(value: boolean) {
    this.props.active = value;
  }
  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
