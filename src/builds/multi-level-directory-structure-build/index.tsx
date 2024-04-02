import { useState } from "react"

const EXPLORER = [
  {
    name: "public",
    isFolder: true,
    items: [
      {
        name: "favicon.svg",
        isFolder: false
      }
    ]
  },
  {
    name: "src",
    isFolder: true,
    items: [
      {
        name: "app.css",
        isFolder: false
      },
      {
        name: "app.js",
        isFolder: false
      },
      {
        name: "components",
        isFolder: true,
        items: [
          {
            name: "button-component",
            isFolder: true,
            items: [
              {
                name: "button.jsx",
                isFolder: false
              }
            ]
          },
          {
            name: "card.jsx",
            isFolder: false
          }
        ]
      }
    ]
  },
  {
    name: "index.html",
    isFolder: false
  }
]

export default function MultiLevelDirectoryStructureBuild() {

  return (
    <div>
      {EXPLORER.map((item, index) => {
        if (item.isFolder) {
          return <Folder key={index} name={item.name} items={item.items} />
        }
        return <File key={index} name={item.name} />
      })}
    </div>
  )
}

function Folder(props: any) {
  const { name, items } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-2">
      <p onClick={() => setIsExpanded((prev) => (!prev))}>/{name}</p>
      {isExpanded && (
        <div className="pl-4">
          {items && items.length > 0 && items.map((item: any, index: any) => {
            if (item.isFolder) {
              return <Folder name={item.name} items={item.items} />
            }
            return <File name={item.name} />
          })}
        </div>
      )}
    </div>
  )
}

function File(props: any) {
  const { name } = props;

  return (
    <div className="mt-2">
      <p>{name}</p>
    </div>
  )
}
