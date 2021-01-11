import { Dropdown } from "carbon-components-react"

const DropDownButton = ({ items, title,handleSelected }) => {

    return <div style={{ width: '20%', marginRight: '0.5em' }}>
        <Dropdown
            id="default"
            label={title}
            items={items}
            itemToString={(item) => (item ? item.text : '')}
            onChange={(item) => handleSelected(item.selectedItem.text)}
            light
        />
    </div>
}

export default DropDownButton;