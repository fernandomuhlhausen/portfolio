import '@testing-library/jest-dom/vitest'

// jsdom não implementa IntersectionObserver; framer-motion (whileInView) precisa dele.
class IntersectionObserverStub {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: readonly number[] = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver
