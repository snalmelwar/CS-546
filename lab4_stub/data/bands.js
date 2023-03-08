// TODO: Export and implement the following functions in ES6 format
import {bands} from '../config/mongoCollections.js';
import {ObjectId} from 'mongodb';

const create = async (
  name,
  genre,
  website,
  recordCompany,
  groupMembers,
  yearBandWasFormed,
  randomAbc
) => {
  if (!name) throw 'You must provide a name for your band';
  if (typeof name !== 'string') throw 'Name must be a string';
  if (name.trim().length === 0)
    throw 'Name cannot be an empty string or string with just spaces';
  name = name.trim();

  if (!website) throw 'You must provide a website for your band';
  if (typeof website !== 'string') throw 'Website must be a string';
  if (website.trim().length === 0)
    throw 'Website cannot be an empty string or string with just spaces';
  website = website.trim();
  if (!website.endsWith('.com')) throw 'Website should end with .com';
  if (!website.startsWith('http://www.')) throw 'Website should start with http://www.';
  const website_name = website.substring(website.indexOf('http://www.') + 11, website.indexOf('.com'));
  if (website_name.length < 5) throw 'website name should be 5 characters long';

  if (!recordCompany) throw 'You must provide a recordCompany for your band';
  if (typeof recordCompany !== 'string') throw 'recordCompany must be a string';
  if (recordCompany.trim().length === 0)
    throw 'recordCompany cannot be an empty string or string with just spaces';    
  recordCompany = recordCompany.trim();

  if (!genre || !Array.isArray(genre))
    throw 'You must provide an array of genre';
  if (genre.length === 0) throw 'You must supply at least one genre';
  for (let i in genre) {
    if (typeof genre[i] !== 'string' || genre[i].trim().length === 0) {
      throw 'One or more genre is not a string or is an empty string';
    }
    genre[i] = genre[i].trim();
  }
  
  if (!groupMembers || !Array.isArray(groupMembers))
    throw 'You must provide an array of group members';
  if (groupMembers.length === 0) throw 'You must supply at least one group member';
  for (let i in groupMembers) {
    if (typeof groupMembers[i] !== 'string' || groupMembers[i].trim().length === 0) {
      throw 'One or more group members is not a string or is an empty string';
    }
    groupMembers[i] = groupMembers[i].trim();
  }

  if (!yearBandWasFormed) throw 'You must provide a year the band was formed';
  if (typeof yearBandWasFormed !== 'number') throw 'yearBandWasFormed must be a number';
  if (yearBandWasFormed.length === 0)
    throw 'yearBandWasFormed cannot be an empty string or string with just spaces';
  if (yearBandWasFormed < 1900) throw 'yearBandWasFormed should be after 1900';
  if (yearBandWasFormed > 2023) throw 'yearBandWasFormed should be before present year 2023';
  
  let newBand = {
    name: name,
    genre: genre,
    website: website,
    recordCompany: recordCompany,
    groupMembers: groupMembers,
    yearBandWasFormed: yearBandWasFormed,
    randomAbc: randomAbc
  };
  const bandCollection = await bands();

  const insertInfo = await bandCollection.insertOne(newBand);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw 'Could not add band';

  const newId = insertInfo.insertedId.toString();

  const band = await get(newId);
  return band;

};

const getAll = async () => {
  const bandCollection = await bands();
  let bandList = await bandCollection.find({}).toArray();
  if (!bandList) throw 'Could not get all dogs';
  bandList = bandList.map((element) => {
    element._id = element._id.toString();
    return element;
  });
  return bandList;
};

const get = async (id) => {
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0)
    throw 'Id cannot be an empty string or just spaces';
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  const bandCollection = await bands();
  const band = await bandCollection.findOne({_id: new ObjectId(id)});
  if (band === null) throw 'No band with that id';
  band._id = band._id.toString();
  return band;
};

const remove = async (id) => {
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0)
    throw 'id cannot be an empty string or just spaces';
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  const bandCollection = await bands();
  const deletionInfo = await bandCollection.findOneAndDelete({
    _id: new ObjectId(id)
  });

  if (deletionInfo.lastErrorObject.n === 0) {
    throw `Could not delete band with id of ${id}`;
  }
  return `${deletionInfo.value.name} has been successfully deleted!`;
};

const rename = async (id, newName) => {
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0)
    throw 'Id cannot be an empty string or just spaces';
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  if (!newName) throw 'You must provide a name for your band';
  if (typeof newName !== 'string') throw 'Name must be a string';
  if (newName.trim().length === 0)
    throw 'Name cannot be an empty string or string with just spaces';
  newName = newName.trim();
  const old_object = await get(id);
  if (old_object.name === newName) throw 'newName same as old name';;
  const updatedBand = {
    name: newName
  };
  const bandCollection = await bands();
  const updatedInfo = await bandCollection.findOneAndUpdate(
    {_id: new ObjectId(id)},
    {$set: updatedBand},
    {returnDocument: 'after'}
  );
  if (updatedInfo.lastErrorObject.n === 0) {
    throw 'could not update band successfully';
  }
  updatedInfo.value._id = updatedInfo.value._id.toString();
  return updatedInfo.value;

};

export {create, getAll, get, remove, rename}