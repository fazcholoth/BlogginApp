class CustomInputTool {
    constructor({ data }) {
      this.data = data;
    }
  
    static get toolbox() {
      return {
        title: 'Custom Input',
        icon: '<input type="text" placeholder="Input">',
      };
    }
  
    render() {
      this.input = document.createElement('input');
      this.input.setAttribute('type', 'text');
      this.input.value = this.data.text || '';
      return this.input;
    }
  
    save() {
      return {
        text: this.input.value,
      };
    }
  }
  
  export default CustomInputTool;