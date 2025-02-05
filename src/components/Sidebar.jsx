import { useState, useCallback } from "react"

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("") 
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  const addMenuItem = useCallback(() => {
    if (newMenuItem) {
      setMenuItems([newMenuItem, ...menuItems])
      setNewMenuItem("")  // Clear input field after adding
    }
  }, [newMenuItem, menuItems])

  // Filter the menu items based on the filter term.
  const filteredMenuItems = menuItems.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {/* Input for new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {/* Input for filter term */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      {/* Render filtered list of menu items */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
