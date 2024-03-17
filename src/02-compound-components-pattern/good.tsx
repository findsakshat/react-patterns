import { ReactNode } from "react"

export default function Good() {

  return (
    <div>
      <Modal>
        <Modal.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, provident corrupti! Asperiores incidunt voluptatibus eius iste distinctio similique omnis officia aliquam harum alias necessitatibus nostrum suscipit, quos amet dolorum reprehenderit.
        </Modal.Content>
      </Modal>
    </div>
  )
}

type ModalProps = {
  children: ReactNode
}

function Modal(props: ModalProps) {
  const { children } = props;

  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.6)' }} className="top-0 left-0 w-full h-full absolute flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

type ModalContentProps = {
  children: ReactNode
}

Modal.Content = function(props: ModalContentProps): ReactNode {
  const { children } = props;

  return (
    <div className="p-6 bg-white min-w-[50%] max-w-[50%] rounded-md">
      {children}
    </div>
  )
}