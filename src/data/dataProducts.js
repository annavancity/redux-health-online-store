const dataProducts = [
    {
        id: 1,
        name: "Cistus Essential Oil",
        description: "Organic cistus essential oil is also known and gum rockrose, and is steam distilled from the leaves and twigs of Cistus ladaniferus. Warm and earthy, cistus oil is a base note with sweet and balsamic undertones. Blends well with bergamot, cypress, frankincense, juniper, and pine essential oils.",
        category: "OIL",
        price: 34.00,
        image: 'oil_cistus'
    },
    {
        id: 2,
        name: "Eucalyptus Essential Oil",
        description: "Organic eucalyptus oil is a camphoraceous top note steam distilled from the leaves and twigs of Eucalyptus globulus. This potent and uplifting oil is often used in blends to support healthy breathing, and eucalyptus is one of the oldest native medicines used in Australia. It is known now for its use in inhalants and vapor rubs, and as a household cleaner. Eucalyptus essential oil blends well with cypress, juniper, lavender, or lemon.",
        category: "OIL",
        price: 9.00,
        image: 'oil_eucalyptus'
    },
    {
        id: 3,
        name: "Fennel Essential Oil",
        description: "Organic fennel essential oil is a middle note steam distilled from the seeds of Foeniculum vulgare. Fennel oil has an aroma like sweet licorice and anise and is popular for abdominal massage. The ancient Greeks thought fennel conveyed long life, courage, and strength. Their name for fennel was marathrion from maraino, meaning “to grow thin”. It blends well with cardamom, ginger, lavender, or lemon.",
        category: "OIL",
        price: 14.50,
        image: 'oil_fennel'
    },
    {
        id: 4,
        name: "Frankincense Essential Oil",
        description: "Our organic frankincense essential oil is a base note steam distilled from the resin of Boswellia carteri and is also known as Boswellia or olibanum. This oil is used in perfumery and can be diffused for its lush and enticing aromatics.",
        category: "OIL",
        price: 17.00,
        image: 'oil_frankincense'
    },
    {
        id: 5,
        name: "Ginger Essential Oil",
        description: "Organic ginger oil is steam distilled from the dried roots of Zingiber officinale. This warm, dry, and spicy middle note is energizing in blends and lends grounding qualities. The aromas of the dried root distillation and fresh root distillation are quite different. The fresh root oil has a bright note in comparison, where the dried root oil has the traditional grounding rooty notes to the aroma.",
        category: "OIL",
        price: 17.25,
        image: 'oil_ginger'
    },
    {
        id: 6,
        name: "Geranium Essential Oil",
        description: "Organic geranium essential oil is steam distilled from the flowers of Pelargonium graveolens. This floral middle note is popular in skin care and for its calming and balancing properties. Geranium is known for its sweet, tenacious-floral scent, and is often been used in rose-like blends as a substitute for the rose oil.",
        category: "OIL",
        price: 27.50,
        image: 'oil_geranium'
    },
    {
        id: 7,
        name: "Lavender Essential Oil",
        description: "Organic lavender essential oil is a middle note steam distilled from the flowers of Lavandula angustifolia. One of our most popular essential oils, lavender oil has an unmistakable sweet, floral and herbal aroma found in body care and perfumes.",
        category: "OIL",
        price: 17.25,
        image: 'oil_lavender'
    },
    {
        id: 8,
        name: "Lemon Balm Essential Oil",
        description: "Organic lemon balm essential oil is steam distilled from the flowering plant Melissa officinalis. Also known as Melissa, lemon balm oil is a middle note with a fresh and green citrus aroma. The genus Melissa comes from the Greek word for honeybee, and the flowers of the lemon balm plant attract bees when it is in bloom. Commonly used in blends for its relaxing qualities, Melissa oil blends well with chamomile, frankincense, rose, or lemon.",
        category: "OIL",
        price: 123.50,
        image: 'oil_lemonbalm'
    },
    {
        id: 9,
        name: "Lemon Essential Oil",
        description: "Organic lemon essential oil is a top note cold-pressed from the fresh peels of Citrus x limon. Unlike distilled citrus oils, cold-pressed oils retain their color with lemon being a sunny yellow. Lemons are thought to have originated in Southeast Asia and the Middle East nearly 2000 years ago and have become integral parts of cuisine all over the world. It can take roughly 100 lemons to produce 1 oz. of oil.",
        category: "OIL",
        price: 9.75,
        image: 'oil_lemon'
    },
    {
        id: 10,
        name: "Myrrh Essential Oil",
        description: "Organic myrrh oil is a base note steam distilled from the gum of Commiphora myrrha. Myrrh essential oil is a soft and earthy fixative with a warm, spicy aroma. Myrrh has been prevalent throughout history. It was used in the mummification process by the Egyptians. It has been used in religious rituals all over the world, and it is utilized in Chinese and Ayurvedic medicines. This ancient scent blends well with frankincense, rose, tea tree, lemon, or neroli.",
        category: "OIL",
        price: 24.50,
        image: 'oil_myrrh'
    },
    {
        id: 11,
        name: "Berry Tea",
        description: "Organic berry tea is a naturally sweet blend where honeybush tea mingles with earthy bramble leaves, and a vibrant blend of elder berries, bilberries, and blueberries to create this complex brew. Our caffeine-free organic berry bramble tea is a gorgeous blend that is perfect anytime during the day.",
        category: "TEA",
        price: 13.25,
        image: 'tea_berry'
    },
    {
        id: 12,
        name: "Blossom Tea",
        description: "Our organic blossoms of health tea is a spirited and uplifting infusion blend that is beautiful to look at and deliciously tasty! These flowers and leaves are traditionally known as beneficial herbs. Combined they create a naturally sweet beverage that can be enjoyed either hot or iced.",
        category: "TEA",
        price: 5.75,
        image: 'tea_blossom'
    },
    {
        id: 13,
        name: "Chamomile Tea",
        description: "An aromatic and flavorful tea made from whole organic chamomile flowers. Great after dinner and especially useful just before bed. Traditionally used for lulling children to sleep.",
        category: "TEA",
        price: 6.25,
        image: 'tea_chamomile'
    },
    {
        id: 14,
        name: "Dream Tea",
        description: "Our organic dream tea is an infusion blend is based on an ancient formula. Especially blended for the dreamer, it is believed to stimulate vivid and easily recalled dreams. The light, minty flavor is enjoyable after a rich or large dinner, or a perfect night-cap after a long day.",
        category: "TEA",
        price: 7.00,
        image: 'tea_dream'
    },
    {
        id: 15,
        name: "Echinacea Tea",
        description: "Organic echinacea & elder tea is a wonderfully mild blend that includes raspberry leaf, rosehips, lemon, and a touch of ginger root. This tea has a smooth taste for soothing the senses and is great hot or iced. Elderberries and Echinacea purpurea help to support immune health*. Brew up a cup of this gentle tea any time of the year to reap the benefits!",
        category: "TEA",
        price: 7.75,
        image: 'tea_echinacea'
    },
    {
        id: 16,
        name: "Ginger Peach",
        description: "This spicy, sweet blend strikes a perfectly balanced cup with subtle notes of ginger and the soft sweetness of peaches. Delicious hot or cold this tea is a wonderful choice any time of day year-round.",
        category: "TEA",
        price: 23.25,
        image: 'tea_gingerpeach'
    },
    {
        id: 17,
        name: "Herbal Coffee",
        description: "Our organic herbal coffee is a deep and invigorating coffee alternative. This shockingly good brew has a remarkable similarity to coffee thus making it the ideal alternative to coffee drinkers who are attempting to limit their intake of this highly caffeinated beverage. Rooty, roasted, and caffeine-free!",
        category: "TEA",
        price: 15.50,
        image: 'tea_coffee'
    },
    {
        id: 18,
        name: "Allspice Powder",
        description: "A warming aromatic, allspice has both sweet and piquant flavors that are reminiscent of cinnamon, cloves, and nutmeg. Allspice is the unripe fruit of an evergreen shrub found exclusively in the western hemisphere, mostly in the Caribbean and Central America. Our allspice power is ground from whole Pimenta dioica fruits adding a complex flavor to spice blends and baking recipes. Ground allspice berries will also make a wonderful addition to tonics, tinctures, and mulled beverages.",
        category: "SPICES",
        price: 4.75,
        image: 'spices_allspice'
    },
    {
        id: 19,
        name: "Basil Leaf",
        description: "Basil is well known for its sweet aroma and the fresh, delicious flavor that it lends to food. Basil is traditionally used to spice up pasta, proteins, soups and sauces. It is the key ingredient of pesto sauce, where it is mixed with hard cheese, pine nuts, and olive oil. As a flavoring agent, basil is best added at the end of cooking as the intense heat will quickly deteriorate its characteristic taste and aroma. In addition to its culinary uses, basil is used to add fragrance to perfumes, soaps, shampoos, and other body care products.",
        category: "SPICES",
        price: 2.75,
        image: 'spices_basil'
    },
    {
        id: 20,
        name: "Bay Leaf Whole",
        description: "Dried bay leaves can be used whole or crumbled added to cooking or consumed as a tea. Bay leaf comes together with parsley and thyme resulting in the subtle yet flavorful blend known as Bouquet Garni, and enhances the taste of any stew, soup or sauce it is introduced into. It is an important ingredient in many French, Moroccan and Turkish dishes.",
        category: "SPICES",
        price: 2.75,
        image: 'spices_bayleaf'
    },
    {
        id: 21,
        name: "Cayenne Powder",
        description: "Cayenne powder is widely used in cooking. Most often compounded as a cream for external use, rarely brewed into a tea for internal use. The burning sensation of hot peppers is a reaction of the central nervous system to capsaicin; unlike horseradish, wasabi, garlic, ginger, and mustard, capsaicin only causes the sensation of damage, not real damage to tissues.",
        category: "SPICES",
        price: 5.00,
        image: 'spices_cayenne'
    },
    {
        id: 22,
        name: "Cardamom Powder",
        description: "Our organic cardamom powder is an extraordinarily aromatic spice. Elettaria cardamomum is often added to coffee, used in baking, or as an ingredient for curry dishes. Ground cardamom has a complex flavor that features spicy, citrusy, and herbal notes.",
        category: "SPICES",
        price: 12.25,
        image: 'spices_cardamom'
    },
    {
        id: 23,
        name: "Chili Flakes",
        description: "The burning sensation of hot peppers is a reaction of the central nervous system to capsaicin; unlike horseradish, wasabi, garlic, ginger, and mustard, capsaicin only causes the sensation of damage, not real damage to tissues.",
        category: "SPICES",
        price: 3.50,
        image: 'spices_chili'
    },
    {
        id: 24,
        name: "Cilantro Leaf",
        description: "Often called coriander leaf outside of the United States, cilantro leaf has been utilized for millennia. Coriandrum sativum is typically employed fresh as a culinary garnish for its bright, citrus notes, however the dried leaf can be used in a similar fashion. Cilantro leaf pairs well with onion and garlic and is often added to marinades, dips, and sauces. The herb can also be made into a tea or extract.",
        category: "SPICES",
        price: 2.50,
        image: 'spices_cilantro'
    },
    {
        id: 25,
        name: "Cloves Whole",
        description: "Cloves are highly aromatic, pungent, and energetically heating. Dried flower buds powdered as a culinary spice or as part of a tea blend.",
        category: "SPICES",
        price: 5.25,
        image: 'spices_cloves'
    },
    {
        id: 26,
        name: "Coriander Seed",
        description: "Coriander is a spice that has been used in the Mediterranean and Asia for thousands of years and is now widely cultivated and available in the West. Traditionally, it was used to support healthy digestion and was often added to beans or other hard to digest dishes due to its carminative qualities. Further, it is well known as a flavoring for liquor, beers, and various soups, sauces, and meats.",
        category: "SPICES",
        price: 3.00,
        image: 'spices_coriander'
    },
    {
        id: 27,
        name: "Garlic Granules",
        description: "One of the single most popular herbal preparations and seasonings of all times, garlic with its intense odor, has a strong reputation that precedes it. It has been used literally all over the world to flavor foods, to ward off evil spirits, as offerings to ancient deities, and for its medicinal bounty. Garlic helps maintain healthy cholesterol levels that are within normal range.",
        category: "SPICES",
        price: 6.50,
        image: 'spices_garlic'
    },
]

export default dataProducts