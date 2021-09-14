import TreeView from '@material-ui/lab/TreeView';

const Menu = () => {
    const data = {
        id: 'root',
        name: 'Parent',
        children: [
          {
            id: '1',
            name: 'Child - 1',
          },
          // …
        ],
      };
    <TreeView />
}
export default Menu;