<template>
  <div>
    <Head>
      <title>Login</title>
    </Head>

    <MyContainer>
      <div class="w-full md:w-1/2 md:mx-auto">
        <h1 class="text-center text-4xl font-medium mb-2">Sign in</h1>
        <p class="text-center mb-6">
          <NuxtLink
            href="/user/register"
            class="text-custom-green no-underline hover:text-green-600 hover:underline"
          >
            Need an account?
          </NuxtLink>
        </p>
        <LoginForm />
      </div>
      <div class="my-4"></div>
    </MyContainer>
  </div>
</template>