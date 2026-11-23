---
name: Contact Form
blocks:
  - type: contact-form
    content: |
      ## Request a door quote

      Tell us your suburb, the work you need and any door or hardware styles you’ve chosen. Approximate measurements help with an initial quote. We confirm the opening and installation requirements at a site measure.

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
      - label: Tell us about the job
        name: message
        type: textarea
        required: true
        rows: 6
        note: Include the number of doors, any door, frame or hardware codes, preferred colours and approximate opening height and width.
    submit_text: Send enquiry
    redirect: /thank-you/
---
