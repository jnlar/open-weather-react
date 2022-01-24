import Button from "./Button";

export default function SearchInput(props: any) {
  return (
    <div className="p-5">
      <div className="flex rounded-md">
        <input
          className="py-1 px-4 w-4/6 rounded-l-md focus:!outline-none bg-neutral-200"
          type="text"
          placeholder="e.g Sydney, Tokyo etc"
          onChange={(e) => props.setCity(e.target.value)}
          ref={props.searchInput}
        />
        <Button
          className={"w-2/6 rounded-r-md"}
          onClick={props.handleLocationClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
