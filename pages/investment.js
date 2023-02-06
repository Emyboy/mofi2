import Layout from '@/component/Layout/Layout'
import PhilosophyHero from '@/component/Philosophy/PhilosophyHero'
import PhilosophyPortfolioCompanies from '@/component/Philosophy/PhilosophyPortfolioCompanies'
import React from 'react'

export default function philosophy() {
	return (
		<Layout>
			<PhilosophyHero />
      <PhilosophyPortfolioCompanies />
		</Layout>
	)
}
