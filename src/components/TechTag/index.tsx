import { HStack, StackProps, Tag, TagProps } from "@chakra-ui/react";

type TechTagProps = { data: string[]; tagProps?: TagProps } & StackProps;

export default function TechTag({ data, tagProps, ...props }: TechTagProps) {
  return (
    <HStack wrap="wrap" spacing={4} {...props}>
      {data.map((skill, idx) => (
        <Tag key={idx} colorScheme="teal" {...tagProps}>
          {skill}
        </Tag>
      ))}
    </HStack>
  );
}
