# Typescript

1. Install Typescript
	- npm install -g typescript
2. Create tsconfig.json
	- tsc --init
3. Run ts file
	- $ node someFile.ts
	- Note that only work when only using js syntax
	- Use ts syntax like Interface doesnt work
	- Best way: Transpile into js and run js file
		- $ tsc someFile.ts
		- $ node someFile.js
	- Note:
		- $ tsc
		- This command will create a lot more file like .d.ts .d.map.ts files
		- $ tsc specificFile.ts 
		- This cmd is enough to create .js file that runnable
## References
- Learn TypeScript in 50 Minutes - TypeScript Beginner Crash Course   https://www.youtube.com/watch?v=3mDny9XAgic
