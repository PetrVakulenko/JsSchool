

class RowComponent extends Component {


  render() {
    if (!this._props.data) {
      return super.render();
    }

    const fields = Object.keys(this._props.data);

    const rowIndex = this._props.index;

    fields.forEach((elKey) => {

      if (elKey === 'remove') {
          var td = new Component({
              innerText: ''
          }, 'td');

          var removeLink = new Component({
                  classList: ['removeRow'],
                  innerText: this._props.data[elKey],
                  style: 'cursor: pointer;'
              },
              'a'
          );

          td.addChild(removeLink);

          this.addChild(td);
      } else {
          this.addChild(new Component({
                  innerText: this._props.data[elKey]
              }, 'td')
          );
      }
    });

    return super.render();
  }

}
