import { HOME } from '../../fixtures/urls'
import { MAIN_TITLE, SAMPLE_PODCAST_TITLE } from '../../fixtures/literals'
import SELECTORS from '../../fixtures/selectors'

describe('Visit Home page', () => {
  beforeEach(() => {
    cy.visit(HOME)
  })

  it('should show the main title', () => {
    cy.contains(MAIN_TITLE)
  })

  it('should show 100 podcast items and filter podcasts by the search text', () => {
    cy.get(SELECTORS.HOME.PODCAST_ITEMS, { timeout: 30000 }).should('have.length', 100)
    cy.screenshot()
    cy.get(SELECTORS.HOME.SEARCH_INPUT).type(SAMPLE_PODCAST_TITLE)
    cy.get(SELECTORS.HOME.PODCAST_ITEMS).should('have.length', 1)
    cy.screenshot()
  })
})
