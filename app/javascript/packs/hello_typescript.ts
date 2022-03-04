// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

class HelloWorld {
  private readonly modulename: string = 'Hello World';
  private readonly myvar: number = 1;

  private sayHelloWorld(key: string): void {
    switch (key) {
      case 'value':
        break;

      default:
        break;
    }
  }
}

new HelloWorld();