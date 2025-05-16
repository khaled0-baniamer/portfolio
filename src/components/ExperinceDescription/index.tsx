import { ListItem, ListProps, UnorderedList } from "@chakra-ui/react";

type ExperinceDescriptionProps = {
  list: string[];
} & ListProps;

export default function ExperinceDescription({
  list,
  ...props
}: ExperinceDescriptionProps) {
  return (
    <UnorderedList {...props}>
      {list.map((element) => (
        <ListItem>{element}</ListItem>
      ))}
    </UnorderedList>
  );
}
