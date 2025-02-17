import { GhostPostOrPage } from "./ghost"
import { ServiceConfig } from '@components/contact/ContactForm'

export interface ContactPage extends GhostPostOrPage {
  form_topics: string[]
  serviceConfig: ServiceConfig
}

export const defaultPage: ContactPage = {
  id: 'custom-page-contact',
  slug: 'contact',
  url: '/contact',
  title: 'Drop me a line',
  custom_excerpt: 'Have a question, suggestion or just want to say hi? Get in touch below',
  form_topics: ['I want to give feedback', 'I want to ask a question'],
  meta_title: 'Contact Us',
  meta_description: 'A contact form page.',
  html: '',
  serviceConfig: {
    url: '/api/v1/contact',
    contentType: 'application/json',
  },
  featureImage: {
    url: 'https://static.gotsby.org/v1/assets/images/gatsby-ghost-contact.png',
    dimensions: {
      width: 1040,
      height: 250
    }
  }
}
