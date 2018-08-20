console.log('app');

class App {
    constructor (mainDomId) {
        this._renderTo = mainDomId;
    }

    run() {
        console.log('app runned');

        const rootContainer = document.getElementById(this._renderTo);

        rootContainer.appendChild(this._buildTable());
    }

    _buildTable() {
        const table = new Component({}, 'table');
        const tRowHead = new Comment({}, 'tr');

        tRowHead
            .addChild(new Component({innertext: "E-mail"}, 'td'))
            .addChild(new Component({innertext: "User name"}, 'td'))
            .addChild(new Component({innertext: "Password"}, 'td'))
        ;
        table.addChild(new Component({}, 'td'));

        return table.render();
    }


}
