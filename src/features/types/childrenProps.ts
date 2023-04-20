
export type TChildren = React.ReactNode | JSX.Element | JSX.Element[];

export default interface IChildProps<T> extends React.HTMLProps<T> {
  children: TChildren
}
