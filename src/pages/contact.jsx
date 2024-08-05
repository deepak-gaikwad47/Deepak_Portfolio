import React, { useState } from "react";
import {
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();

  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    const { userName, email, subject, message } = formData;
    const isValid = userName && email && subject && message;
    setIsFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending email:", error.message);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py="12">
      <VStack spacing="6">
        <Heading as="h1" size="2xl">
          Contact Me
        </Heading>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing="4" align="start">
            <FormControl>
              <FormLabel htmlFor="userName">Your Name</FormLabel>
              <Input
                type="text"
                id="userName"
                placeholder="Your good name"
                name="userName"
                value={formData.userName}
                onChange={(e) => {
                  handleChange(e);
                  handleValidation();
                }}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                  handleValidation();
                }}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject for mail"
                value={formData.subject}
                onChange={(e) => {
                  handleChange(e);
                  handleValidation();
                }}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => {
                  handleChange(e);
                  handleValidation();
                }}
                required
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="telegram"
              variant="ghost"
              alignSelf="center"
              isDisabled={!isFormValid}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
