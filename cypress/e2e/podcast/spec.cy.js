import { HOME } from '../../fixtures/urls'
import { SAMPLE_PODCAST_ID } from '../../fixtures/literals'
import SELECTORS from '../../fixtures/selectors'

describe('Visit Home page', () => {
  it('should go to the podcast view when user clicks on it', () => {
    cy.visit(HOME)
    cy.get(SELECTORS.HOME.SAMPLE_PODCAST_ITEM, { timeout: 30000 }).should('be.visible').click()
    cy.url().should('include', `/podcast/${SAMPLE_PODCAST_ID}`)
  })
})
