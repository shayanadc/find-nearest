import request from 'supertest';
import { app } from '../src/app';
import {UserRepo} from "../src/user.repo";
import mongoose from 'mongoose';


describe('API TESTING',() => {
    it('app should be defined', async () => {
        expect(app).toBeDefined();
    })
    it('returns hello app', async () => {
        var id = new mongoose.Types.ObjectId().toHexString()
        const mockGetAll = jest.fn();
        UserRepo.prototype.findModel = mockGetAll;
        mockGetAll.mockResolvedValue([{_id :id, name: 'shayan', email: 'ex@mail.com', age: 50}, {_id :id, name: 'mim', email: 'mim@mail.com', age: 5}]);

        var res = await request(app).get('/api/users')
        expect(res.statusCode).toBe(200);
        const users = [{_id: id, name: 'shayan', email: 'ex@mail.com', age: 50}]

        expect(res.body).toStrictEqual(users)
    })
    //
    // it('return not found json', async () => {
    //     var res = await request(app).get('/not-found')
    //     expect(res.statusCode).toEqual(404);
    //     expect(res.body).toStrictEqual({"message": "not found!"})
    // })
});