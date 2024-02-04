/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type Props<T> = {
  [key: string]: T;
};

class Component<T> {
  constructor(public props: Props<T>) {}
}

class Page<T> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
