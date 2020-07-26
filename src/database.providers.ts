import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm'
export const config: TypeOrmModuleOptions ={
    type: 'postgres',
    username: 'postgres',
    password: '123456',
    port: 5432,
    host: '127.0.0.1',
    database: 'books',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    // migrationsTableName: "custom_migration_table",
    // migrations: ["migration/*.js"],
    // cli: {
    //     "migrationsDir": "migration"
    // }
};