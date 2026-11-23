---
name: Privacy
meta_title: Privacy and Website Enquiries | Edina Doors
meta_description: How browser-based search, optional browser-held quote details and external enquiry services differ on this static Edina Doors website, including the current unconnected form.
permalink: /privacy/
blocks:
  - type: section-header
    intro: |
      # Privacy, without a pretend account system

      Edina’s website is an informational site. It does not provide customer accounts or take payments. Reading a range page, searching the site and sending an enquiry are different actions with different data boundaries.

      This page describes the current site implementation. Hosting, email and any future form provider have their own processing arrangements; it is not a claim that no service ever receives technical information.
  - type: faqs
    intro_content: |
      ## What happens in your browser?
    items:
      - question: Where does site search run?
        answer: Search uses a generated Pagefind index loaded from this website and searches it in your browser. There is no application search endpoint receiving your typed query. Search text can appear in a search-page URL, so a URL containing it may be visible in browser history, hosting request logs or to someone you share that link with. Do not put private information into search.
      - question: Does browsing create an Edina customer account?
        answer: No. There is no customer login or account database in this site. This does not remove ordinary hosting requests for pages, images, scripts and search-index files.
      - question: Where would a saved quote list be stored?
        answer: The site’s optional quote-list feature keeps its selections in the current browser’s local storage, not an Edina account. If that feature is offered, clearing the site’s browser data removes the locally saved information; it is not automatically available on another device. The feature does not make a payment or place an order. This door-site draft uses a project enquiry rather than a checkout.
      - question: Can the host still receive technical information?
        answer: Yes. Serving a static page still involves requests to the hosting service, which may process information such as IP addresses, requested URLs and request times under its own arrangements. We do not make a blanket claim that browsing is anonymous or that infrastructure logs do not exist.
  - type: markdown
    content: |
      ## Enquiries cross a different boundary

      **The form in this draft is not connected to a submission service.** No external form destination is currently configured, so the site shows a notice instead of a sendable form. Do not assume a message has been delivered through that notice. You can [email info@edinadoors.com.au](mailto:info@edinadoors.com.au) instead.

      The form component is designed to post to an external form service when one is configured. That service receives the fields submitted, rather than this static site storing them in a customer database. If a quote-list form is used, its selected items are included only when that form is submitted. An optional spam-protection service can add another third-party boundary if enabled.

      **Before connecting a form:** identify the actual provider here, link its privacy information, explain the intended handling of enquiries and check the live fields. No provider-specific retention period, storage location or deletion promise has been invented for this unconfigured draft.

      ## Only send what the enquiry needs

      The intended contact fields cover your name, email, optional phone and suburb, door and hardware preferences, approximate opening dimensions and your message. Those details help Michael discuss the project, check the location and prepare the next steps. Emailing photos sends them through your and the recipient’s email services.

      Do not include payment-card details, identity documents, lock PINs, passwords, alarm codes or private app screenshots. Avoid including other people’s personal information in photographs unless you have permission and it is needed.

      ## External websites and smart-lock apps

      Supplier websites, review platforms and smart-lock apps are separate services. Their data handling is not governed by this static website. Choosing a connected lock may involve a manufacturer account or app; ask about the selected product rather than assuming that the website’s browser-only search model applies to the lock.

      ## Privacy questions and draft updates

      Contact [info@edinadoors.com.au](mailto:info@edinadoors.com.au) with questions about information you have sent to Edina. Michael still needs to confirm the operational retention and handling arrangements for email enquiries and any service connected at launch. This page does not promise a response deadline or a deletion capability that has not been established.

      See [image transparency](/image-transparency/) for how fictional people and illustrative project scenes are labelled, and [contact](/contact/) for the current enquiry options.
---
