---
name: Contact Form
blocks:
  - type: contact-form
    content: |
      ## Request a door quote

      Tell us your suburb, how many doors you need and whether you’re replacing existing doors, renovating or building new. Photos and approximate measurements are helpful, but don’t worry if you haven’t chosen a style yet.

      We’ll get back to you to discuss the next steps.

      You can also email [info@edinadoors.com.au](mailto:info@edinadoors.com.au) with photos and questions.

      We use your details to respond to your enquiry. [Privacy policy](/privacy/).
    fields:
      - label: Name
        name: name
        required: true
      - label: Email
        name: email
        type: email
        required: true
      - label: Phone (optional)
        name: phone
        type: tel
      - label: Suburb
        name: suburb
        type: text
      - label: Project type
        name: project_type
        type: select
        options:
          - Replacing existing doors
          - Renovating
          - Building new
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
---
