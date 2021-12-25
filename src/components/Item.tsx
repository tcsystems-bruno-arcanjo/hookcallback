import { memo } from "react"

type ItemProps = {
  addToWishList: (value: string) => void;
  title: string;
}

function Item(props: ItemProps) {
  return (
    <li>
      {props.title}
      <button onClick={() => props.addToWishList(props.title)} type="button">
        Add to wish list
      </button>
      </li>
  )
}

export default memo(Item);