import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data/item'


const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map((item)=>(
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}> 

                </BentoGridItem>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid