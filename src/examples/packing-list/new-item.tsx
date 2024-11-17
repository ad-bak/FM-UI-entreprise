import { useState } from 'react';
import { add } from './store/items-slice';
import { useDispatch } from './store/hooks';

const NewItem = () => {
  const [newItemName, setNewItemName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewItemName(value);
  };

  return (
    <form
      id="new-item"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(add({ name: newItemName }));
        setNewItemName('');
      }}
    >
      <label htmlFor="new-item-name" className="font-semibold">
        New Item Name
      </label>
      <div className="my-2 flex">
        <input
          id="new-item-name"
          className="w-full"
          type="text" // Changed from search to text
          placeholder="New Item"
          value={newItemName}
          onChange={handleInputChange}
          data-testid="new-item-input"
        />
        <button
          id="new-item-submit"
          className="whitespace-nowrap border-l-0 bg-primary-300"
          disabled={!newItemName}
          aria-label={'Add New Item'}
          type="submit"
          data-testid="new-item-submit"
        >
          ➕ Add New Item
        </button>
      </div>
    </form>
  );
};
export default NewItem;
