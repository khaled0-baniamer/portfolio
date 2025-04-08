import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
  useToast,
  StackProps,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = StackProps & {};

const ContactForm: React.FC<Props> = ({ ...rest }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email:
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error);
    if (hasError) {
      return;
    }

    // Simulate form submission success
    toast({
      title: "Message sent.",
      description: "Your message has been successfully sent!",
      status: "success",
      duration: 5000,
      position: "top-right",
      isClosable: true,
    });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <VStack
      {...rest}
      w={"full"}
      spacing={4}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
      <FormControl isInvalid={errors.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <FormErrorMessage>Name is required.</FormErrorMessage>}
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <FormErrorMessage>A valid email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors.message}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <FormErrorMessage>Message is required.</FormErrorMessage>
        )}
      </FormControl>

      <Button onClick={handleSubmit} variant={"primary"} width="full">
        Submit
      </Button>
    </VStack>
  );
};

export default ContactForm;
