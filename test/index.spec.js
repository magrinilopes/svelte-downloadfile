/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {DownloadFile} from '../src'

describe('DownloadFile', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(DownloadFile)
		expect(container).toMatchSnapshot()
	})
})
