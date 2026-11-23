---
name: Contact
meta_title: Request a Door Quote, Sunshine Coast | Edina Doors
meta_description: Tell us about your doors, suburb and project. Request a quote for timber or aluminium entry doors, internal doors, hardware or a smart lock.
permalink: /contact/
schema_type: organization
eleventyNavigation:
  key: Contact
  order: 5
blocks:
  - type: contact-form
    content: |
      # Your New Doors Start Here

      Fill in the enquiry form below and tell us about your project. We’ll be in touch to talk through your ideas, answer your questions and work out the next steps.

      ## A few details help us get started

      Let us know your suburb, how many doors you need and whether you’re replacing existing doors, renovating or building new. Photos and approximate measurements are helpful, but don’t worry if you haven’t chosen a style yet.

      ## Prefer to email?

      Skip the quote request form and email us directly with a few details about your project. Photos, approximate measurements and any door or hardware preferences are a helpful starting point.
    fields:
      - label: Name
        name: name
        required: true
      - label: Email
        name: email
        type: email
        required: true
      - label: Phone
        name: phone
        type: tel
      - label: Suburb
        name: suburb
        type: text
      - label: Door style
        name: door_style
        type: text
      - label: Frame configuration
        name: frame_configuration
        type: text
      - label: Hardware selection
        name: hardware_selection
        type: text
      - label: Hardware colour
        name: hardware_colour
        type: text
      - label: Approximate opening height
        name: opening_height
        type: text
      - label: Approximate opening width
        name: opening_width
        type: text
      - label: Message
        name: message
        type: textarea
        required: true
        rows: 6
    submit_text: Send enquiry
    redirect: /thank-you/
  - type: markdown
    content: |
      ## Get in Touch

      Sunshine Coast, Queensland

      Email [info@edinadoors.com.au](mailto:info@edinadoors.com.au) with your project details, photos or questions, and we’ll be in touch. We’ll get back to you to discuss the next steps.
  - type: cta
    content: |
      ## Not sure what to include?

      A photo of the existing door or opening, an approximate measurement and your suburb are enough to start the conversation.
    button:
      text: See how a job works
      href: /process/
      size: lg
---
