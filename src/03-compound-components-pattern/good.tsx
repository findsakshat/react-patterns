import React, { ReactElement, ReactNode } from "react"

export default function Good() {

  return (
    <div>
      <Modal>
        <ModalContent>
          <ModalHeader>
            Hello World
          </ModalHeader>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quia magnam, et explicabo facere aperiam eos hic id, odio minima atque recusandae ut harum fugit nam quibusdam earum, eum ipsum.
        </ModalContent>
      </Modal>
    </div>
  )
}

type ModalProps = {
  children: ReactNode
}

function Modal(props: ModalProps) {
  const { children } = props;

  const hasModalContent = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && (child.type as any).name === 'ModalContent'
  )

  if (!hasModalContent) {
    throw new Error('Modal component must contain at least ModalContent component.');
  }

  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.6)' }} className="top-0 left-0 w-full h-full absolute flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

type ModalContentProps = {
  children?: ReactNode
}

function ModalContent(props: ModalContentProps) {
  const { children } = props;

  return (
    <div className="bg-white min-w-[50%] max-w-[50%] rounded-md p-6">
      {children}
    </div>
  )
}

type ModalHeaderProps = {
  children: ReactNode
}

function ModalHeader(props: ModalHeaderProps) {
  const { children } = props;

  return (
    <div className="text-[24px]">
      {children}
      <hr className="my-4" />
    </div>
  )
}