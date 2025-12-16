import { Tailwind } from "@react-email/tailwind";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message From your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 p-10">
              <Heading className="leading-tight">
                You recieved the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
