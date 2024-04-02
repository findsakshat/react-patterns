import { useState } from "react";

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' },
  { value: 'option8', label: 'Option 8' },
  { value: 'option9', label: 'Option 9' },
  { value: 'option10', label: 'Option 10' },
  { value: 'option11', label: 'Option 11' },
  { value: 'option12', label: 'Option 12' },
  { value: 'option13', label: 'Option 13' },
  { value: 'option14', label: 'Option 14' },
  { value: 'option15', label: 'Option 15' },
  { value: 'option16', label: 'Option 16' },
  { value: 'option17', label: 'Option 17' },
  { value: 'option18', label: 'Option 18' },
  { value: 'option19', label: 'Option 19' },
  { value: 'option20', label: 'Option 20' },
];

export default function MultipleSelectDropdownBuild() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="px-3 py-2 border rounded-md" onClick={() => setIsOpen(prev => !prev)}>
        Multi Select Dropdown
      </button>
      {isOpen && (
        <div className="mt-2">
          <MultipleSelect
            options={options}
            onChange={(selected: any) => {
              console.log(selected);
            }}
          />
        </div>
      )}
    </div>
  )
}

function MultipleSelect(props: any) {
  const { options, onChange } = props;

  const [selected, setSelected] = useState(props.selected || []);

  return (
    <div className="p-4 border max-w-[200px] max-h-[200px] overflow-hidden overflow-y-scroll rounded shadow-lg">
      {options && options.map((item: any, index: any) => {
        return (
          <label key={index} className="flex items-center gap-4 py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">
            <input
              type="checkbox"
              value={item.value}
              checked={selected.includes(item.value)}
              onChange={() => {
                const currentIndex = selected.indexOf(item.value);
                const newSelected = [...selected];

                if (currentIndex === -1) {
                  newSelected.push(item.value);
                } else {
                  newSelected.splice(currentIndex, 1);
                }

                setSelected(newSelected);
                onChange(newSelected);
              }}
            />
            <span>
              {item.label}
            </span>
          </label>
        )
      })}
    </div>
  )
}