import { prisma } from './generated/prisma-client/index'
// const { prisma } = require('./generated/prisma-client/index.ts')

async function main() {
	// const newUser = await prisma.createUser({
	// 	name: 'Karl',
	// 	email: 'randomemail@at.com',
	// 	posts: {
	// 		create: {
	// 			title: 'This is my first Prisma app'
	// 		}
	// 	}
	// })
	// console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

	const allUsers = await prisma.users()
	console.log(allUsers)

	const allPosts = await prisma.posts()
	console.log(allPosts)

	// const usersCalledKarl = await prisma
	//   .users({
	//     where: {
	//       name: "Karl"
	//     }
	//   })

	//   console.log('QUERIED')
	// console.log(usersCalledKarl)

	// const updatedUser = await prisma
	//   .updateUser({
	//     where: { id: usersCalledKarl[0].id },
	//     data: { email: "karl@prisma.io" }
	//   })

	//   console.log('UPDATED')
	//  console.log(updatedUser)

	// const deletedUser = await prisma
	//   .deleteUser({ id: usersCalledKarl[0].id })

	//   console.log('DELETED')
	//   console.log(deletedUser)

}


main().catch(e => console.log(e))